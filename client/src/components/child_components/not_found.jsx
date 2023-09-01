function NotFound(props){
    return(
        <div>
            
<div class="error-page">
  <div>
    
    <h1 data-h1="404">404</h1>
    <p data-p="NOT FOUND">NOT FOUND</p>
    {props.type&&<p>Can't access this page directly</p>}
    
  </div>
</div>
<div id="particles-js"></div>

        </div>
    )
}
export default NotFound