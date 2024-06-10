
import ListIteam from './ListIteam'


function List() {
 
 const Listact =["Wake up 5:30 early morning", "Get Ready", "Going To the Gym"]
 
 return(
    <>
    <h1>List Of Activites</h1>

    {
        Listact.map(function(item){

            return <ListIteam activity ={item}/>
        })
    }
     </>
 )
 
   
}

export default List