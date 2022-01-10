export const goToList = (history) => {
    history.push("/")
}

export const goToDetails = (history, id) => {
  history.push(`/animal/${id}`);
};

export const goToCreate = (history) => {
  history.push("/create")
}