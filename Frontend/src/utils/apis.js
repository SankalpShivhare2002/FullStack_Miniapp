import axios from "axios";

const API = axios.create({
  baseURL: "https://fullstack-miniapp.onrender.com/", // backend link
  withCredentials: true, // if using cookies/JWT later
});

// 1. Log in API fetching

export const loginUser = async (email, password) => {
  try {
    const res = await API.post("/api/users/login", { email, password });
    return {
      success: res.data.status,
      message: res.data.message,
      data: res.data,
    };
  } catch (err) {
    return {
      success: false,
      message: err.response?.data?.message || "Internal Server Error",
    };
  }
};
//2. Text API fetching
export const textTranslate = async () => {
  try {
    const res = await API.get("/api/users/text");
    return res.data;
  } catch (err) {
    return (
      err.response?.data || { success: false, message: "Internal Server error" }
    );
  }
};

//3/ Terms API fetching
export const termsText = async () => {
  try {
    const res = await API.get("/api/users/terms");
    return res.data;
  } catch (err) {
    return (
      err.response?.data || { success: false, message: "Internal Server Error" }
    );
  }
};

//4. PriceList API fetching
export const fetchPriceList = async () => {
  try {
    const res = await API.get("/api/users/priceList", {
      headers: {
        "Cache-Control": "no-cache",
      },
    });
    console.log("Fetched price list:", res.data);

    return res.data;
  } catch (err) {
    console.error("Error fetching price list:", err);
    return [];
  }
};

export const updateProduct = async (product) => {
  try {
    const res = await API.get("/api/users/priceList", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    return await res.json();
  } catch (err) {
    console.error(err);
  }
};
