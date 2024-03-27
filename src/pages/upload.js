// import communitiesData from './communities.json';
// import {useState} from "react"; // Импорт данных из локального JSON файла
//
// const CommunityList = () => {
//     const [communities, setCommunities] = useState(communitiesData);
//     const [newCommunity, setNewCommunity] = useState({ name: '', description: '', avatar: '' });
//     const createCommunity = () => {
//         const updatedCommunities = [...communities, newCommunity];
//         setCommunities(updatedCommunities);
//         localStorage.setItem('communities', JSON.stringify(newCommunity));
//         setNewCommunity({ name: '', description: '', avatar: '' });
//     };
//
//     return (
//         <div>
//             <h1>Список сообществ</h1>
//             <ul>
//                 {communities.map((community, index) => (
//                     <li key={index}>
//                         <div>{community.name}</div>
//                         <div>{community.description}</div>
//                         <img src={community.avatar} alt={community.name} />
//                     </li>
//                 ))}
//             </ul>
//             <h2>Создать новое сообщество</h2>
//             <input type="text" value={newCommunity.name} onChange={(e) => setNewCommunity({ ...newCommunity, name: e.target.value })} placeholder="Название" />
//             <input type="text" value={newCommunity.description} onChange={(e) => setNewCommunity({ ...newCommunity, description: e.target.value })} placeholder="Описание" />
//             <input type="text" value={newCommunity.avatar} onChange={(e) => setNewCommunity({ ...newCommunity, avatar: e.target.value })} placeholder="Аватарка URL" />
//             <button onClick={createCommunity}>Создать</button>
//         </div>
//     );
// };
//
// export default CommunityList;