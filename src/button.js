function MyButton() {
    return (
      <button>
        I'm a button
      </button>
    );
  }
  const user={
    name:'anh gau truc',
    urlanh:'../src/ihttps://tse4.mm.bing.net/th?id=OIP.Y7YzEawdi1TvQWm4SOvJ6AHaFL&pid=Api&P=0mg/x.png',
    urlanh1:'https://tse4.mm.bing.net/th?id=OIP.6axwjhODqPR2bmx5Ih7_cgHaFa&pid=Api&P=0',
    urlanh2:'https://tse4.mm.bing.net/th?id=OIP.awdldE1SeZYefkToEKGvlQHaFj&pid=Api&P=0'
  }
export default function mybutton(){
    return(
        <div>
            <table>
                <tr>
                    <td>
                    <h1>{user.name}</h1>
            <img
            src={user.urlanh}
            alt='none'></img>
            <h2>hay an vao day</h2>
                    </td>
                </tr>
                <tr>
                    <td>
                    <h1>{user.name}</h1>
            <img
            src={user.urlanh1}
            alt='none'></img>
            <h2>hay an vao day</h2>
                    </td>
                </tr>
                <tr>
                    <td>
                    <h1>{user.name}</h1>
            <img
            src={user.urlanh2}
            alt='none'></img>
            <h2>hay an vao day</h2>
                    </td>
                </tr>
            </table>
         <MyButton />
        </div>
    );
}
