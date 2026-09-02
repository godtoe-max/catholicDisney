import http.server
import socketserver
import urllib.request
import os
import functools

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class ProxyHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path.startswith("/api/queue-times/"):
            park_id = self.path.split("/api/queue-times/")[1].split("?")[0].strip("/")
            target_url = f"https://queue-times.com/parks/{park_id}/queue_times.json"
            try:
                req = urllib.request.Request(
                    target_url,
                    headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) CatholicDisney/1.0"}
                )
                with urllib.request.urlopen(req, timeout=10) as resp:
                    data = resp.read()
                    self.send_response(200)
                    self.send_header("Content-Type", "application/json")
                    self.send_header("Access-Control-Allow-Origin", "*")
                    self.send_header("Content-Length", str(len(data)))
                    self.end_headers()
                    self.wfile.write(data)
                    return
            except Exception as e:
                err_bytes = f'{{"error": "{str(e)}"}}'.encode("utf-8")
                self.send_response(502)
                self.send_header("Content-Type", "application/json")
                self.send_header("Content-Length", str(len(err_bytes)))
                self.end_headers()
                self.wfile.write(err_bytes)
                return
        return super().do_GET()

if __name__ == "__main__":
    handler_class = functools.partial(ProxyHandler, directory=DIRECTORY)
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), handler_class) as httpd:
        print(f"Dev server running at http://localhost:{PORT}")
        httpd.serve_forever()
