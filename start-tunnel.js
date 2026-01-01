// start-tunnel.js
import localtunnel from "localtunnel";

const PORT = 5173; // your Vite port

(async () => {
  const tunnel = await localtunnel({ port: PORT, subdomain: "imperialstonex" });

  console.log(`✅ Tunnel is live at: ${tunnel.url}`);
  console.log("Send this link to your employer to view your current build.");

  tunnel.on("close", () => {
    console.log("❌ Tunnel closed");
  });
})();
