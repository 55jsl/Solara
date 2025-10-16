export function getTemplate({ withError }) {
  return `
  <!DOCTYPE html>
  <html>
    <head><title>登录 Solara</title></head>
    <body style="text-align:center; font-family:Arial;">
      <h1>🎵 Solara 音乐播放器</h1>
      <form action="/cfp_login" method="post">
        <input type="password" name="password" placeholder="输入密码" style="padding:10px;">
        <br><br>
        <button type="submit" style="padding:10px; background:#00ff88; color:black;">开门进音乐世界！</button>
        ${withError ? '<p style="color:red;">哎呀，密码不对，再试试</p>' : ''}
      </form>
    </body>
  </html>
  `;
}
