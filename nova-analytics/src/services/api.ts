const API_BASE_URL = "http://127.0.0.1:8000";

export async function fetchRevenue() {
  const response = await fetch(`${API_BASE_URL}/revenue`);

  if (!response.ok) {
    throw new Error("Failed to fetch revenue");
  }

  return response.json();
}