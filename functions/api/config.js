// 处理全局配置（壁纸、主题）的后端接口
export async function onRequest(context) {
    const { request, env } = context;

    // 获取云端配置
    if (request.method === "GET") {
        const data = await env.NAV_DB.get("site_config");
        return new Response(data || "{}", {
            headers: { "Content-Type": "application/json" }
        });
    }

    // 管理员保存云端配置
    if (request.method === "POST") {
        try {
            const body = await request.text();
            await env.NAV_DB.put("site_config", body);
            return new Response(JSON.stringify({ success: true }), {
                headers: { "Content-Type": "application/json" }
            });
        } catch (error) {
            return new Response(JSON.stringify({ success: false }), { status: 500 });
        }
    }

    return new Response("Method not allowed", { status: 405 });
}
