// code taken from ChatGPT
<script>
    const params = new URLSearchParams(window.location.search);
    let url = params.get('url');

    try {
        url = decodeURIComponent(url)
    } catch (e) {}

    window.location.href = url;
</script>