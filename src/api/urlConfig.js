const serverRoot = `${process.env.NODE_ENV === 'production' ? 'http://www.lybenson.com' : 'http://127.0.0.1'}:9050`

export const banner = serverRoot + '/banner'