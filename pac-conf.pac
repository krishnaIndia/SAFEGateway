function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*.safenet"))
     return "PROXY localhost:8000";

    return "DIRECT";
}