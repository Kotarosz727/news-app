from http.server import BaseHTTPRequestHandler
from datetime import datetime

class handler(BaseHTTPRequestHandler):

  def do_GET(self):
    self.send_response(200)
    self.send_header('Content-type', 'text/json')
    self.end_headers()
    msg = {"msg":"test"}
    self.wfile.write(msg)
    return