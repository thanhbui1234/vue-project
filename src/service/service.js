import instance from "../core/Api";
export const getFilm = async () => {
  try {
    const rest = await instance.get("/film");
    return rest.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getFilmById = async (id) => {
  try {
    const rest = await instance.get(`/film/${id}`);
    return rest.data || rest;
  } catch (error) {
    return error.message;
  }
};
