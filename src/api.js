class API {
  baseUrl = 'https://www.themealdb.com/api/json/v1/1';

  categoriesEndPoint = `${this.baseUrl}/categories.php`;

  filter(cateName) {
    return `${this.baseUrl}/filter.php?c=${cateName}`;
  }

  detail(id) {
    return `${this.baseUrl}/lookup.php?i=${id}`;
  }
}

const api = new API();
export default api;
