function FindProxyForURL(url, host) {

    if (
        shExpMatch(host, "*.openai.com") ||
        shExpMatch(host, "*.chatgpt.com") ||
        shExpMatch(host, "*.gemini.google.com") ||
        shExpMatch(host, "*.googleapis.com") ||
        shExpMatch(host, "*.gstatic.com")
    ) {
        return "PROXY 127.0.0.1:8001";
    }

    return "DIRECT";
}
