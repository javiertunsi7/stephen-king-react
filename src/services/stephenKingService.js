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
        image: "/images/bookCovers/misery.png",
        Title: "Misery",
        Year: 1987,
        Publisher: "Viking",
        ISBN: "978-0-670-81364-3"
      },
      {
        image: "/images/bookCovers/theDarkTower.png",
        Title: "La Torre Oscura",
        Year: 1982,
        Publisher: "Grant",
        ISBN: "978-0-937986-50-9"
      },
      {
        image: "/images/bookCovers/theDeadZone.png",
        Title: "La zona muerta",
        Year: 1979,
        Publisher: "Viking Press",
        ISBN: "978-0-670-26077-5"
      },
      {
        image: "/images/bookCovers/it.png",
        Title: "It",
        Year: 1986,
        Publisher: "Viking",
        ISBN: "978-0-670-81302-5"
      },
      {
        image: "/images/bookCovers/petSematary.png",
        Title: "Cementerio de animales",
        Year: 1983,
        Publisher: "Doubleday",
        ISBN: "978-0-385-18244-7"
      },
      {
        image: "/images/bookCovers/revival.png",
        Title: "Revival",
        Year: 2014,
        Publisher: "Scribner",
        ISBN: "978-1-476-77038-3"
      },
      {
        image: "/images/bookCovers/theShining.png",
        Title: "El Resplandor",
        Year: 1977,
        Publisher: "Doubleday",
        ISBN: "978-0-385-12167-5"
      },
      {
        image: "/images/bookCovers/theLongWalk.png",
        Title: "Larga Marcha",
        Year: 1979,
        Publisher: "Signet Books",
        ISBN: "978-0-451-08754-6"
      },
      {
        image: "/images/bookCovers/theStand.png",
        Title: "Apocalipsis",
        Year: 1978,
        Publisher: "Doubleday",
        ISBN: "978-0-385-12168-2"
      }
    ];
  }
}

const stephenKingServiceInstance = new StephenKingService();
export default stephenKingServiceInstance;