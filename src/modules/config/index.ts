const config = {
    "mobile_max_window_size": 760
}

export default function globalConfig(key: string) {
    return config[key];
}
