const html = `<!DOCTYPE html>
<body>
  <h1>Hello World mochen</h1>
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
    // return await env.Assets.fetch(new Request("https://fake.host/path"))
    // return await env.Assets.fetch( "https://fake.host/test-page");
    // return await env.Assets.fetch("/path")
}


export default {
  async fetch(request, context, env) {
    return handleAssetsFetch(request, env);
  }
};
