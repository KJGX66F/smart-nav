// 这是运行在 Cloudflare 边缘服务器上的后端代码
export async function onRequest(context) {
    const { request, env } = context;
    
    // 如果前端是 GET 请求，说明是来【获取】数据的
    if (request.method === "GET") {
        // 从 KV 数据库读取数据，键名为 "custom_links"
        const data = await env.NAV_DB.get("custom_links");
        return new Response(data || "[]", {
            headers: { "Content-Type": "application/json" }
        });
    }
    
    // 如果前端是 POST 请求，说明管理员修改了链接，来【保存】数据的
    if (request.method === "POST") {
        try {
            const body = await request.text(); // 获取前端发来的 JSON 数据
            // 将数据存入 KV 数据库
            await env.NAV_DB.put("custom_links", body);
            return new Response(JSON.stringify({ success: true, message: "保存成功" }), {
                headers: { "Content-Type": "application/json" }
            });
        } catch (error) {
            return new Response(JSON.stringify({ success: false, message: "保存失败" }), { status: 500 });
        }
    }

    return new Response("Method not allowed", { status: 405 });
}
