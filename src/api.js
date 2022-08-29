class API {
  baseUrl = 'www.themealdb.com/api/json/v1/1/';

  categoriesEndPoint = `${this.baseUrl}/categories.php`;

  filter(para) {
    return `${this.baseUrl}/filter.php?c=${para}`;
  }

  detail(id) {
    return `${this.baseUrl}/lookup.php?i=${id}`;
  }
}

const api = new API();
export default api;
