/*eslint-disable*/
import './App.css';
import React, {useState,lazy,Suspense,useHistory,useParams} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//components
//components
let Stock_page = lazy(()=>{return import('./components/stock_page.js')});
let Register = lazy(()=>{return import('./components/Register.js')});
let Service = lazy(()=>{return import('./components/Service.js')});
let Interest = lazy(()=>{return import('./components/Interest.js')});
let Login = lazy(()=>{return import('./components/Login.js')});
// let Chart = lazy(()=>{return import('./components/Chart.js')});

//bootstrap
//bootstrap
import {Navbar,Nav,NavDropdown,Button,Form,FormControl,Jumbotron,Container,Row,Col,Carousel,Card,Image} from 'react-bootstrap';
//router
//router
import {Link,Switch,Route} from 'react-router-dom';
//chart
//chart
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ComposedChart,Area,Bar
} from 'recharts';
//image
//image
import News_Up from './image//News_Up.png';
import Real_time from './image//Realtime.png';
import Alarm from './image/Alarm.png';
//data
//data
import Saying from './data/saying.js';

//MainMainMain
//MainMainMain
//MainMainMain
function App() {
  let [search,search_set] = useState("");
  let [searchbutton,searchbutton_set] = useState(0);
  let [id, id_set] = useState("");
  return (
    <div className="App">
      <Navnav search={search} search_set={search_set} searchbutton={searchbutton} searchbutton_set = {searchbutton_set}></Navnav>
      <Switch>
        <Route exact path = "/">

          <Main_page></Main_page>
        </Route>

        <Route exact path="/service">
          <Suspense fallback = {<div>로딩중...</div>}>
            <Service></Service>
          </Suspense>
        </Route>
        
        <Route path="/stock">
          <Suspense fallback = {<div>로딩중...</div>}>
            <Stock_page search={search} searchbutton ={searchbutton}></Stock_page>
          </Suspense>
        </Route>

        <Route path="/stock/:id">
          <Suspense fallback = {<div>로딩중...</div>}>
            <Stock_page search={search}  searchbutton ={searchbutton}></Stock_page>
          </Suspense>
        </Route>

        <Route path="/register">
          <Suspense fallback = {<div>로딩중...</div>}>
            <Register search={search}  searchbutton ={searchbutton}></Register>
          </Suspense>
        </Route>

        <Route path="/login">
          <Suspense fallback = {<div>로딩중...</div>}>
            <Login></Login>
          </Suspense>
        </Route>

        <Route path="/interest">
          <Suspense fallback = {<div>로딩중...</div>}>
            <Interest></Interest>
          </Suspense>
        </Route>
      </Switch>
    </div>
  );
}

//Navbar 상단바 컴포넌트
//Navbar 상단바 컴포넌트 
//Navbar 상단바 컴포넌트
function Navnav(props){
  return(
    <div>
    <Navbar className = "Navbar1" expand="lg">
        <Navbar.Brand><Link to="">Stock Alarm</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link><Link to="/service">서비스</Link></Nav.Link>
            <Nav.Link><Link to="/stock">주식종목</Link></Nav.Link>
            <NavDropdown title="회원정보" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to = "/interest">관심종목</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />.
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="예) 삼성전자" className="mr-sm-2" onChange={(e)=>{props.search_set(e.target.value)}}/>
            <Link to={"/stock/" + props.search}> <Button variant="outline-success" onClick = {()=>{props.searchbutton_set(props.searchbutton+1)}}>Search</Button></Link>
            
          </Form>
        </Navbar.Collapse>
      </Navbar>
      
      <Carousel className="sayingback">
          {
            Saying.map(function(a,i){
              return (
                <Carousel.Item>
                 {/* <Image src={Saying[i].image} roundedCircle/> */}
                  
                  <Carousel.Caption>
                  </Carousel.Caption>
                  <p style={{color:"white" ,"padding-top":"10px"}}>  {Saying[i].saying} <br/> - {Saying[i].name} - </p> 
                </Carousel.Item>
              )
            })
          }
      </Carousel>
            
      
      </div>
  );
}

//메인 페이지 컴포넌트
//메인 페이지 컴포넌트
//메인 페이지 컴포넌트
function Main_page(){
  return(
    <div>
        <Jumbotron className="main_background">
            <h1>주식서비스</h1>
            <br></br><br></br>
            <p>
              학업, 직장으로 인해 주식에 집중하실 수 없으신가요?
              <p>Stock Alarm에서 주가와 기사량 변동에 관한 데이터를 알려드립니다.</p>
              부담없이 신청하세요.
            </p>
            <p>
              <br></br><br></br>
              <Button variant="primary" ><Link to = "/register">구독하기</Link></Button>
            </p>
          </Jumbotron>

      <Container>
        <h3 className="title1">대표 종목 예시 </h3>
        <Row justify-content-center>
          <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" className="card3" src={News_Up} />
            <Card.Body>
              <Card.Title>삼성전자</Card.Title>
              <Card.Text>

              </Card.Text>
              <Button variant="primary">종목 보러가기</Button>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" className = "card3" src={News_Up} />
            <Card.Body>
              <Card.Title>아모레퍼시픽</Card.Title>
              <Card.Text>
                
              </Card.Text>
              <Button variant="primary">종목 보러가기</Button>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" className="card3" src={News_Up} />
            <Card.Body>
              <Card.Title>박셀바이오</Card.Title>
              <Card.Text>
                
              </Card.Text>
              <Button variant="primary">종목 보러가기</Button>
            </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>  
      <p></p>
      <Carousel className = "Main_Carousel">
        <Carousel.Item >
          <img
            className="back"
            src={Real_time}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>실시간 기사량 기반 데이터 분석</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="back"
            src={News_Up}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>장 마감 이후 기사량 상승 종목 관찰</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="back"
            src={Alarm}
            alt="Third slide" 
            
          />
          
          <Carousel.Caption>
            <h3>선택 종목 기사량,주가 급변 시 알람서비스 제공</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <hr/>

      </div>
  );
}


export default App; 