export const host = "https://api.artic.edu/api/v1/artworks";

export interface ILogin {
  limit: number;
  page: number;
}

export async function getArt({ page, limit }: ILogin) {
  const response = await fetch(`${host}?page=${page}&limit=${limit}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error("Такой пользователь не найден");
  }
}

export async function getArtCard(id: number) {
  const response = await fetch(`${host}/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error("Такой пользователь не найден");
  }
}
