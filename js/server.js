import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const logs = []; // 簡易ログ保存

// ログイン処理
app.post("/api/login", (req, res) => {
  const { username, name } = req.body || {};
  if (!username || !name) {
    return res.status(400).json({ error: "ユーザー名とパスワードを入力してください" });
  }

  // ★デモ用：常に成功扱い。本来はDB認証
  const logEntry = {
    username,
    timestamp: new Date().toISOString(),
    result: "success"
  };
  logs.push(logEntry);

  res.json({ ok: true, user: username });
});

// 管理者ログ閲覧
app.get("/admin/logs", (req, res) => {
  res.send(`<h1>ログ一覧</h1><pre>${JSON.stringify(logs, null, 2)}</pre>`);
});

app.listen(3000, () => console.log("http://localhost:3000"));