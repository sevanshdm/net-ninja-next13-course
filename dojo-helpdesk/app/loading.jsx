// this file creates a loading component to be used with suspense comoponents which create suspense boundaries
// these are found on page.jsx files. Ulitmately results in loading screens

//an example of when this file is used can be found in tickets folder, page.jsx line 16
export default function Loading() { 
    return (
        <main className="text-center">
            <h2 className="text-primary">Loading...</h2>
            <p>Hopefully not for too long :)</p>
        </main>     
    )
}
