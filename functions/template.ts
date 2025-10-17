export function getTemplate({ withError }: { withError: boolean }) {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <title>登录 Solara</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style>body { margin: 0; padding: 20px; }</style>
    </head>
    <body style="text-align:center; font-family:Arial; background: linear-gradient(to bottom, #f0f8ff, #00ff88);">
      <h1>🎵 Solara 音乐播放器</h1>
      <form action="/cfp_login" method="post">
        <input type="password" name="password" placeholder="输入密码" style="padding:10px; font-size:16px; border:1px solid #ccc; border-radius:5px;">
        <br><br>
        <button type="submit" style="padding:10px 20px; background:#00ff88; color:black; border:none; border-radius:5px; font-size:16px; cursor:pointer;">开门进音乐世界！</button>
        ${withError ? '<p style="color:red; margin-top:10px;">哎呀，密码不对，再试试</p>' : ''}
      </form>
    </body>
  </html>
  `;
}
