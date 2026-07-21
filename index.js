const html = `<!DOCTYPE html>
<body>
  <h1>Hello World mochen11</h1>
</body>`

async function handleRequest(request) {
  return new Response(html, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
  })
}


async function handleAssetsFetch(request, env) {
    return await env.Assets.fetch("http://a.com/vue.svg");
    //return await env.Assets.fetch("http://a.com/mochen1.txt");
    // return await env.Assets.fetch(new Request("https://fake.host/path"))
    // return await env.Assets.fetch( "https://fake.host/test-page");
    // return await env.Assets.fetch("/path")
}


async function handleSelfFetchAssets(request, env) {
    // 取出原请求的host
    const host = request.headers.get("host");
    // fetch的url是：   http://{host}/mochen1.txt
    const url = `http://${host}/mochen1.txt`; 
    return await fetch(url);
}


export default {
  async fetch(request, context, env) {
    const action = request.headers.get("action");
    if (action === "assets_fetch") {
      return handleAssetsFetch(request, env);
    }

    if (action === "self_fetch_assets") {
      return handleSelfFetchAssets(request, env);
    }

    return handleRequest(request, env);
  }
};
