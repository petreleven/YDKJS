from http.server import SimpleHTTPRequestHandler, HTTPServer

class MyHTTPRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', 'http://localhost')
        super().end_headers()

httpd = HTTPServer(('localhost', 8000), MyHTTPRequestHandler)
httpd.serve_forever()
