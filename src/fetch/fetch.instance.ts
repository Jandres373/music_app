interface AuthData {
  token: string  | number | null | undefined;
  iat: number  | number | null | undefined;
  exp: number  | number | null | undefined;
  jti: string  | number | null | undefined;
}

class API {
  auth?: AuthData | undefined
  BASE_URL: string

  constructor(auth: AuthData | undefined, url?: string) {
    this.BASE_URL = process.env.BASE_URL || url || ''
    this.auth = auth
  }

  private async request(
    URL: string,
    METHOD: string = 'GET',
    CONTENT_TYPE: string = 'application/json',
  ) {
    try {
      const res = await fetch(`${this.BASE_URL}${URL}`, {
        method: METHOD,
        headers: {
          'Content-Type': CONTENT_TYPE,
          Authorization: `Bearer ${this?.auth?.token}`,
        },
      })

      if (!res.ok) {
        throw new Error(`Error making request: ${res.status}`)
      }

      return res.json()
    } catch (error) {
      console.error('Error in request:', error)
      return { message: "There's an error fetching the data", error }
    }
  }

  public async get(URL: string) {
    return this.request(URL)
  }
}

export default API
