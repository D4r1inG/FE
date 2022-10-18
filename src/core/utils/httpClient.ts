import axios, { AxiosError, AxiosInstance } from "axios";
import lo from "lodash";

const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    Accept: "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const accessToken = "token";
    if (!config.headers) {
      return config;
    }

    if (accessToken) {
      config.headers.Authorization = `${accessToken}`;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

let instance: any = {};

instance.get = async (endpoint: string, config: any) => {
  try {
    let response = await api.get(endpoint, config);
    let status = lo.get(response, "status");
    let data = lo.get(response, "data", {});
    let code = lo.get(response, "data.code");

    if (status === 200) {
      if (code !== 200) {
        return {
          status: 400,
          error:
            data.message ||
            `Có lỗi trong quá trình thực thi!(400 - get - ${endpoint})`,
        };
      }

      return {
        status: 200,
        data: data.data,
        message: data.message,
      };
    }
    return {
      error: "Có lỗi trong quá trình thực thi!(Error != 200)",
    };
  } catch (e) {
    try {
      let status = lo.get(e, "response.status");
      let data = lo.get(e, "response.data", {});
      if (status === 400) {
        return {
          status: 400,
          error:
            data.message ||
            `Có lỗi trong quá trình thực thi!(400 - get - ${endpoint})`,
        };
      }
      return {
        status: 500,
        error:
          data.message ||
          `Có lỗi trong quá trình thực thi!(500 - get - ${endpoint})`,
      };
    } catch (error) {
      return {
        status: 500,
        error:
          error || `Có lỗi trong quá trình thực thi!(xxx - get - ${endpoint})`,
      };
    }
  }
};

instance.post = async (endpoint: string, config: any, params: object) => {
  try {
    let response = await api.post(endpoint, params, config);
    let status = lo.get(response, "status");
    let data = lo.get(response, "data", {});
    let code = lo.get(response, "data.code");

    if (status === 200) {
      if (code !== 200) {
        return {
          status: 400,
          error:
            data.message ||
            `Có lỗi trong quá trình thực thi!(400 - post - ${endpoint})`,
        };
      }

      return {
        status: 200,
        data: data.data,
        message: data.message,
      };
    }
    return {
      error: "Có lỗi trong quá trình thực thi!(Error != 200)",
    };
  } catch (e) {
    try {
      let status = lo.get(e, "response.status");
      let data = lo.get(e, "response.data", {});
      if (status === 400) {
        return {
          status: 400,
          error:
            data.message ||
            `Có lỗi trong quá trình thực thi!(400 - post - ${endpoint})`,
        };
      }
      return {
        status: 500,
        error:
          data.message ||
          `Có lỗi trong quá trình thực thi!(500 - post - ${endpoint})`,
      };
    } catch (error) {
      return {
        status: 500,
        error:
          error || `Có lỗi trong quá trình thực thi!(xxx - post - ${endpoint})`,
      };
    }
  }
};

instance.put = async (endpoint: string, config: any, params: object) => {
  try {
    let response = await api.put(endpoint, params, config);
    let status = lo.get(response, "status");
    let data = lo.get(response, "data", {});
    let code = lo.get(response, "data.code");

    if (status === 200) {
      if (code !== 200) {
        return {
          status: 400,
          error:
            data.message ||
            `Có lỗi trong quá trình thực thi!(400 - put - ${endpoint})`,
        };
      }

      return {
        status: 200,
        data: data.data,
        message: data.message,
      };
    }
    return {
      error: "Có lỗi trong quá trình thực thi!(Error != 200)",
    };
  } catch (e) {
    try {
      let status = lo.get(e, "response.status");
      let data = lo.get(e, "response.data", {});
      if (status === 400) {
        return {
          status: 400,
          error:
            data.message ||
            `Có lỗi trong quá trình thực thi!(400 - put - ${endpoint})`,
        };
      }
      return {
        status: 500,
        errors:
          data.message ||
          `Có lỗi trong quá trình thực thi!(500 - put - ${endpoint})`,
      };
    } catch (error) {
      return {
        status: 500,
        error:
          error || `Có lỗi trong quá trình thực thi!(xxx - put - ${endpoint})`,
      };
    }
  }
};

instance.delete = async (endpoint: string, params: object) => {
  try {
    let payload = {
      data: params,
    };
    let response = await api.delete(endpoint, payload);
    let status = lo.get(response, "status");
    let data = lo.get(response, "data", {});
    let code = lo.get(response, "data.code");

    if (status === 200) {
      if (code !== 200) {
        return {
          status: 400,
          error:
            data.message ||
            `Có lỗi trong quá trình thực thi!(400 - delete - ${endpoint})`,
        };
      }

      return {
        status: 200,
        data: data.data,
        message: data.message,
      };
    }
    return {
      error: "Có lỗi trong quá trình thực thi!(Error != 200)",
    };
  } catch (e) {
    try {
      let status = lo.get(e, "response.status");
      let data = lo.get(e, "response.data", {});
      if (status === 400) {
        return {
          status: 400,
          error:
            data.message ||
            `Có lỗi trong quá trình thực thi!(400 - delete - ${endpoint})`,
        };
      }
      return {
        status: 500,
        error:
          data.message ||
          `Có lỗi trong quá trình thực thi!(500 - delete - ${endpoint})`,
      };
    } catch (error) {
      return {
        status: 500,
        error:
          error ||
          `Có lỗi trong quá trình thực thi!(xxx - delete - ${endpoint})`,
      };
    }
  }
};

export default instance;
