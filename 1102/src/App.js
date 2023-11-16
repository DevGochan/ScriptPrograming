import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams} from 'react-router-dom'; // as Router는 이름 줄여쓰는 것
import './App.css';

const Home = () => {
  return(
    <div style = {{padding: 20}}>
      <h1>Home page</h1>
      <p>This is a Home page view.</p>
    </div>
  );
}

const About = () => {
  return(
    <div style = {{padding: 20}}>
      <h1>About page</h1>
      <p>This is a About page view.</p>
    </div>
  );
}

// Blog Data 정의
const blogs = {
  'post1': {
    title: 'My Movie post 1',
    content: 'This is a K-movie post'
  },
  'post2': {
    title: 'My Movie post 2',
    content: 'This is a US movie post'
  },
  'post3': {
    title: 'My Movie post 3',
    content: 'This is a Programming books post'
  },
  'post4': {
    title: 'My Movie post 4',
    content: 'This is a K-POP post'
  }
}

const Blog = () => {
  return(
    <div style = {{padding: 20}}>
      <h1>Blog page</h1>
      <p>This is a Blog page view.</p>
      <Outlet /> {/* PostList 컴포넌트 내용이 여기에 표시됨 */}
    </div>
  );
}

// Blog 데이터를 읽어서 리스트 엘리먼트로 생성하는 함수
function PostList() {
  return(
    <ul>
      {
        Object.entries(blogs).map(([postid, { title }])=>( // blogs 오브젝트의 내용을 배열로 만들어준다.
          <li key={postid}>
            <Link to={`/blog/${postid}`}>
              <h3>{title}</h3>
            </Link>
          </li>
        ))
      }
    </ul>
  );
}

const Post = () => {
  const { postid } = useParams(); // react-router-dom에 정의된 hook. 
  const post = blogs[postid];
  if(!post) {
    return <span>The seleted post is not exist.</span>
  }
  const {title, content} = post;
  return (
    <div style={{padding: 20}}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

const NoPage = () => {
  return(
    <div style = {{padding: 20}}>
      <h1>404: Page Not Found</h1>
      <p>The page is not exist.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav style={{margin: 10}}>
        <Link to='/' style={{padding: 5}}>Home</Link>
        <Link to='/about' style={{padding: 5}}>About</Link>
        <Link to='/blog' style={{padding: 5}}>Blog</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}/> 
        <Route path='/about' element={<About />}/>
        {/* 루트가 한 페이지라고 생각하면 되고 path는 URL의 주소, element는 path에 해당하는 컴포넌트 */}
        <Route path='/blog' element={<Blog />}> 
          <Route index element={<PostList />} />
          <Route path=':postid' element={<Post/>} />
        </Route>
        <Route path='*' element={<NoPage />}/>
        {/* 존재하지 않는 url 입력시 Nopage 컴포넌트로 처리 */}
      </Routes>
    </Router>
  );
}

export default App;
