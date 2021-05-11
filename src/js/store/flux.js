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
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			agregarFavoritos: (index, color) => {
				setStore({ demo: demo });
			},
			eliminarFavorito: (index, color) => {
				//reset the global store
				setStore({ demo: demo });
			},
			loadSomeData: async () => {
				//personajes
				try {
					const res = await fetch("https://www.swapi.tech/api/people/");
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
					const res = await fetch("https://www.swapi.tech/api/planets/");
					const data = await res.json();
					console.log("Async:", data);
					setStore({
						planetas: data.results
					});
				} catch (error) {
					console.log(error);
				}
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
                */
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
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
