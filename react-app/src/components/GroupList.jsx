import"./GroupList.css";
function GroupList(){
        const items = [
    'Hayat Hussein',
    'Biruk Mintesnot',
    'Blien Moges',
    'Elias Derbew',
    'Bisrat Ambachew',
    'Eyerusalem Ashagre',
    'Eyob Desalegn',
    'Fikru Demlew',
    'Habtemariam Bereket',
    'Hayou Lemessa',
    'Helina zeleke'
        ];

        items.map(item => <li>{items}</li>) 
        return(
        <>
        <h1>Group Member List</h1>
       <ul className="Group-List">
{items.map((item) => (
    <li key={item}>{item}</li>
))}
    </ul>
    </>
    )
}

export default GroupList;