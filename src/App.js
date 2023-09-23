import{QueryClient, QueryClientProvider, useQuery} from 'react-query'
import './App.css'; // Corrected CSS import

////Create a new QueryClient instance
const queryClient = new QueryClient()

function App(){
  return(
    <QueryClientProvider client={queryClient}>
      <Universities/>
    </QueryClientProvider>
  );
}

function Universities(){
  const {isLoading,error,data}=useQuery('universities' ,()=>
  fetch('http://universities.hipolabs.com/search?country=United+States').then((res) => res.json())

)

//Render a loading message while the date is being fetched
if (isLoading) return<div>Loading...</div>

// Render am error message if an error occured while fetching of the data
if(error) return <div>An error occured: {error.message}</div>

// Render the lisjt of universities retritrived from the API
return(
  <div>
    <h1>Fetching data using REACT Query</h1>
    <h2>Universities in United States</h2>
    <ul>
      {data.map((university) => (
        <li key={university.name}>{university.name}</li>
      ))}
     
    </ul>
  </div>
);

}

export default App;