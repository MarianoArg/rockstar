type ConfigObject = {
  body?: Record<string, unknown>;
  headers?: Record<string, unknown>;
  otherConfig?: Record<string, unknown>;
};

export default function client(endpoint: string, { body, headers, ...otherConfig }: ConfigObject = {}) {
  const baseHeaders = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
  };

  const config: Record<string, unknown> = {
    method: 'GET',
    ...otherConfig,
    headers: {
      ...baseHeaders,
      ...headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  return window.fetch(`${process.env.REACT_APP_BASE_URL}/${endpoint}`, config).then(async (response: Response) => {
    if (response.ok) {
      return await response.json();
    } else {
      const errorMessage = await response.text();
      return Promise.reject(new Error(errorMessage));
    }
  });
}
