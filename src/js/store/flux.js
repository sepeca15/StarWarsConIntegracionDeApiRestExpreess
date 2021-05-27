const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			personajes: [],
			planetas: [],
			favoritos: [],
			detalles: []
		},
		actions: {
			agregarFavoritos: Favorito => {
				const store = getStore();
				const nuevoFavorito = store.favoritos.concat(Favorito);
				setStore({ favoritos: nuevoFavorito });
			},
			eliminarFavorito: Favorito => {
				const store = getStore();
				var nuevoFavorito = store.favoritos.filter(favoritos => {
					return favoritos !== Favorito;
				});
				setStore({ favoritos: nuevoFavorito });
			},
			loadSomeData: async () => {
				//personajes
				try {
					const res = await fetch("https://3001-silver-lemming-ufc7i0g6.ws-us07.gitpod.io/personajes");
					const data = await res.json();
					console.log("Async:", data);
					setStore({
						personajes: data.results
					});
				} catch (error) {
					console.log(error);
				}
				//planetas
				try {
					const res = await fetch("https://3001-silver-lemming-ufc7i0g6.ws-us07.gitpod.io/planetas");
					const data = await res.json();
					console.log("Async:", data);
					setStore({
						planetas: data.results
					});
				} catch (error) {
					console.log(error);
				}
			},

			cargarDetallesPersonajes: async index => {
				const store = getStore();
				const url = store.personajes.map((elm, i) => {
					if (i === index);
					return elm.url;
				});
				const urlIndex = url[index];
				console.log(urlIndex);
				try {
					const res = await fetch(urlIndex);
					const data = await res.json();
					console.log("Async:", data);
					setStore({
						detalles: data.result.properties
					});
				} catch (error) {
					console.log(error);
				}
			},
			cargarDetallesPlanetas: async index => {
				const store = getStore();
				const url = store.planetas.map((elm, i) => {
					if (i === index);
					return elm.url;
				});
				const urlIndex = url[index];
				console.log(urlIndex);
				try {
					const res = await fetch(urlIndex);
					const data = await res.json();
					console.log("Async:", data);
					setStore({
						detalles: data.result.properties
					});
				} catch (error) {
					console.log(error);
				}
			}
		}
	};
};

export default getState;
