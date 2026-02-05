import axios from 'axios';

const API_BASE_URL = 'https://stephen-king-api.onrender.com/api';

class StephenKingService {
  async getAllBooks() {
    try {
      const response = await axios.get(`${API_BASE_URL}/books`);
      return response.data.data || [];
    } catch (error) {
      console.error('Error al obtener los libros:', error);
      throw new Error('No se pudieron cargar los libros.');
    }
  }

  async getTopTenBooks() {
    try {
      const response = await axios.get('/data/cardsAndTable.json');
      return response.data.data || [];
    } catch (error) {
      console.error('Error al cargar los 10 mejores libros:', error);
      return this.getFallbackTopBooks();
    }
  }

  getFallbackTopBooks() {
    return [
      {
        image: "/images/bookCovers/salemsLot.png",
        Title: "Salem's Lot",
        Year: 1975,
        Publisher: "Doubleday",
        ISBN: "978-0-385-00751-1"
      },
      {
        image: "/images/bookCovers/it.png",
        Title: "It",
        Year: 1986,
        Publisher: "Viking",
        ISBN: "978-0-670-81302-5"
      }
    ];
  }
}

export default new StephenKingService();