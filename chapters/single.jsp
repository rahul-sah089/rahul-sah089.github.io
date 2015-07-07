
<!DOCTYPE HTML>
<html>
<head>
<title>Java-Homes</title>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
<link href="css/form.css" rel="stylesheet" type="text/css" media="all" />
<link href='http://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800,900' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Lato:100,300,400,700,900,100italic,300italic,400italic,700italic,900italic' rel='stylesheet' type='text/css'>

<link href="fontawesome/css/font-awesome.min.css" rel="stylesheet" type="text/css" media="all" />

<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800' rel='stylesheet' type='text/css'>
<script type="text/javascript" src="js/jquery.min.js"></script>

<script type="text/javascript">
        $(document).ready(function() {
            $(".dropdown img.flag").addClass("flagvisibility");

            $(".dropdown dt a").click(function() {
                $(".dropdown dd ul").toggle();
            });
                        
            $(".dropdown dd ul li a").click(function() {
                var text = $(this).html();
                $(".dropdown dt a span").html(text);
                $(".dropdown dd ul").hide();
                $("#result").html("Selected value is: " + getSelectedValue("sample"));
            });
                        
            function getSelectedValue(id) {
                return $("#" + id).find("dt a span.value").html();
            }

            $(document).bind('click', function(e) {
                var $clicked = $(e.target);
                if (! $clicked.parents().hasClass("dropdown"))
                    $(".dropdown dd ul").hide();
            });


            $("#flagSwitcher").click(function() {
                $(".dropdown img.flag").toggleClass("flagvisibility");
            });
        });
     </script>
<!-- start menu -->     
<link href="css/megamenu.css" rel="stylesheet" type="text/css" media="all" />
<script type="text/javascript" src="js/megamenu.js"></script>
<script>$(document).ready(function(){$(".megamenu").megamenu();});</script>
<!-- end menu -->
<script type="text/javascript" src="js/jquery.jscrollpane.min.js"></script>
		<script type="text/javascript" id="sourcecode">
			$(function()
			{
				$('.scroll-pane').jScrollPane();
			});
		</script>
<!----details-product-slider--->
				<!-- Include the Etalage files -->
					
					<script src="js/jquery.etalage.min.js"></script>
				<!-- Include the Etalage files -->
				<script>
						jQuery(document).ready(function($){
			
							$('#etalage').etalage({
								
								
								
								click_callback: function(image_anchor, instance_id){
									alert('Callback example:\nYou clicked on an image with the anchor: "'+image_anchor+'"\n(in Etalage instance: "'+instance_id+'")');
								}
							});
							

					});
				</script>
				<!----//details-product-slider--->	
<!-- top scrolling -->
<script type="text/javascript" src="js/move-top.js"></script>
<script type="text/javascript" src="js/easing.js"></script>
   <script type="text/javascript">
		jQuery(document).ready(function($) {
			$(".scroll").click(function(event){		
				event.preventDefault();
				$('html,body').animate({scrollTop:$(this.hash).offset().top},1200);
			});
		});
	</script>					
</head>
<body>
  <div class="header-top">
	 <div class="wrap"> 
		<div class="logo">
			<a href="index.html"><img src="../../images/javasages.png" style="width: 50px;" alt=""/></a>
	    </div>
	    <div class="cssmenu">
		   <ul>
			 <li class="active"><a href="register.html">Sign up & Save</a></li> 
			 <li><a href="shop.html">Store Locator</a></li> 
			 <li><a href="login.html">My Account</a></li> 
			 <li><a href="checkout.html">CheckOut</a></li> 
		   </ul>
		</div>
		<div class="clear"></div>
 	</div>
   </div>
	
	<div id="header">
		<!--#include virtual="header.html" -->
	</div>
	
       <div class="single">
         <div class="wrap">
     	    <div class="rsidebar span_1_of_left">
				   <section  class="sky-form">
                   	  <h4>Category</h4>
						<div class="row row1 scroll-pane">
							<div class="col col-4">
								<span>
									<p>
										<i class="fa fa-pagelines">
										<i></i><a href="#javaIntro">Introduction</a>
										</i>
									</p>
									<br/>
								</span>
								<span>
									<p>
										<i class="fa fa-pagelines">
											<i></i><a href="#whoCreatedIt">Who created Java?</a>
										</i>
									</p>
								<br/>
								</span>
								<span>
									<p>
										<i class="fa fa-pagelines"><i></i>
											<a href="#features">Features of Java</a>
										</i>
									</p>
									<br/>
								</span>
								<span>
									<p>
										<i class="fa fa-pagelines"><i>
										</i><a href="#usesOfJava">Uses of Java</a></i>
										</p>
									<br/>
								</span>
							</div>
						 </div>
                   	</section>
				</div>
		<div class="cont span_2_of_3">
				<!-- labout span_1_of_a1 div starts here -->
			  <div class="labout span_1_of_a1" style="height: 300px;">
				<!-- start product_slider -->
				     <ul id="etalage" style="display: block; width: 314px; height: 414px;">
							<li>
								<img class="etalage_thumb_image" src="images/java_tech.jpg" />
							</li>
					</ul>
				</div>
				<!-- labout span_1_of_a1 div  ends here -->
				<!-- cont1 span_2_of_a1 starts here-->
				<div id="javaIntro">
					<div class="cont1 span_2_of_a1">
						<h3 class="m_3">Java Introduction</h3>
						<p class="m_desc">Java is an open source,high level computer programming language. It enables the programmer to write computer instruction in normal english based commands, instead of writing it in the machine based. It is known as "high level programming language" because it easily understanable to the human. The programmer can write the code following the particular set of rule knows as "Syntax". Once the program(set of instructions) is been written, the high level instruction is been converted to the low-level instruction(machine level) and executed.</p>
					</div>
				</div>
				<!-- cont1 span_2_of_a1 ends here-->
			<div class="clear"></div>
			
			<!-- 2nd labout span_1_of_a1 starts here-->
			 <div class="labout span_1_of_a1" style="height: 300px;">
				<!-- start product_slider -->
				     <ul id="etalage" style="display: block; width: 314px; height: 414px;">
							<li>
								<img class="etalage_thumb_image" src="images/gosling.jpg" />
							</li>
						</ul>
			</div>
			<!-- 2nd labout span_1_of_a1 ends here-->
			
			<!-- 2nd cont1 span_2_of_a1 ends here-->
			<div id="whoCreatedIt">
				<div class="cont1 span_2_of_a1">
					<h3 class="m_3">Who created Java?</h3>
					<p class="m_desc">Java  was develop in the early nineties by a team led by Mr. James Gosling(shown on left side) in Sun MicroSystem. It was originally designed to be used as the part of the mobile devices and embedded Systems. However when Java1.0 was released to the public it main focus shifted towards Internet technologies. It provided more interactivity with users by giving developers a way to produce animated webpages. It has evolved as a succesful programming language both for hardware and software purposes. A more than decade later, Java is still an extremely popular language with over 6.5million developers worldwide. </p>
				</div>
			</div>
			<!-- 2nd cont1 span_2_of_a1 ends here-->
			<div class="clear"></div>
			
			<!-- 3rd labout span_1_of_a1 starts here-->
			 <div class="labout span_1_of_a1" style="height: 300px;">
				<!-- start product_slider -->
				     <ul id="etalage" style="display: block; width: 314px; height: 414px;">
							<li>
								<img class="etalage_thumb_image" src="images/feature-of-java.png">
							</li>
						</ul>
			</div>
			<!-- 3rd labout span_1_of_a1 ends here-->
			
			<!-- 4th cont1 span_2_of_a1 ends here-->
			<div id="features" class="cont1 span_2_of_a1">
				<h3 class="m_3">Features of Java</h3>
				<h3 class="m_desc"><i class="fa fa-hand-o-right"></i><span style="text-decoration:underline;">Easy To Use</span></h3>
				<p class="m_desc">The fundamental of the Java came from a programming language called "C++".Java programming language is the enchanced version of C++. It tried to eliminate the loop holes of C++  like explicit pointers, operator overloading etc. There was no need to explicitly remove the object once it is been used. The memory deallocation is done automatically by "Java Garbage collector".Java built on, and improved the ideas of c++, to provide a programming language that was powerful and simple to use. </p>
				
				<h3 class="m_desc"><i class="fa fa-hand-o-right"></i><span style="text-decoration:underline;">Reliability</span></h3>
				<p class="m_desc">Java needed to reduce the likelihood of fatal errors from programmer mistakes. With this in mind, object-oriented programming was introduced. Once data and its manipulation were packaged together in one place, it increased Java’s robustness.</p>
				
				<h3 class="m_desc"><i class="fa fa-hand-o-right"></i><span style="text-decoration:underline;">Secure</span></h3>
				<p class="m_desc">As Java was originally targeting mobile devices that would be exchanging data over networks, it was built to include a high level of security. Java is probably the most secure programming language to date.</p>
				
				<h3 class="m_desc"><i class="fa fa-hand-o-right"></i><span style="text-decoration:underline;">Platform Dependent</span></h3>
				<p class="m_desc">This is one of the most important feature of Java. Before understanding this feature we need to know about:<br/>
					<strong>Javac - compiler that converts the source code into byte code.<br/></strong>
					<strong>JVM - interpreter that converts the byte code into machine language code.<br/></strong>
					As we know java is both compiler & interpreter based language. Once the java code also known as source code is compiled, it gets converted to native code known as BYTE CODE which is portable & can be easily executed on all operating systems. Byte code generated is basically represented in hexa decimal format. This format is same on every platform be it Solaris work station or Macintosh, windows or Linux. After compilation, the interpreter reads the generated byte code & translates it according to the host machine. Byte code is interpreted by Java Virtual Machine which is available with all the operating systems we install. so to port Java programs to a new platform all that is required is to port the interpreter and some of the library routines.<br/>
					Source code -> javac ->Universal byte code<br/>
					Universal byte ->jvm/java -> execute them on a particular machine.<br/>
				</p>
				
				<h3 class="m_desc"><i class="fa fa-hand-o-right"></i><span style="text-decoration:underline;">Robust</span></h3>
				<p class="m_desc">Since Java is an open source project it lead to the robust development of it. There are many features of the Java which surpasses the other programming language. It lacks the concept of the pointer due to which it cuts down the security issues. There is an automatic garbage collection in Java which implicitly removes the unused object. There is exception handling and type checking mechanism in java. All these points makes java robust.</p>
				
				<h3 class="m_desc"><i class="fa fa-hand-o-right"></i><span style="text-decoration:underline;">Architecture-neutral</span></h3>
				<p class="m_desc">Since java is an open source project it lead to the robust development of it. There are many features of the Java which surpasses the other programming language. It lacks the concept of the pointer due to which it cuts down the security issues. There is an automatic garbage collection in Java which implicitly removes the unused object. There is exception handling and type checking mechanism in java. All these points makes java robust.</p>
				
				<h3 class="m_desc"><i class="fa fa-hand-o-right"></i><span style="text-decoration:underline;">Architecture-neutral</span></h3>
				<p class="m_desc">There is no implementation dependent features e.g. size of primitive types is set.</p>
				
				<h3 class="m_desc"><i class="fa fa-hand-o-right"></i><span style="text-decoration:underline;">Portable</span></h3>
				<p class="m_desc">The byte code generated by Java Compiler can be easily carried to any platform</p>
				
				<h3 class="m_desc"><i class="fa fa-hand-o-right"></i><span style="text-decoration:underline;">Distributed</span></h3>
				<p class="m_desc">The application generated by the Java can be easily disturbed across various platform.RMI and EJB are used for creating distributed applications. We may access files by calling the methods from any machine on the internet.</p>
				
				<h3 class="m_desc"><i class="fa fa-hand-o-right"></i><span style="text-decoration:underline;">Multi-threaded</span></h3>
				<p class="m_desc">A thread is like a separate program, executing concurrently. We can write Java programs that deal with many tasks at once by defining multiple threads. The main advantage of multi-threading is that it shares the same memory. Threads are important for multi-media, Web applications etc.</p>
				
    		</div>
			<!-- 4th cont1 span_2_of_a1 ends here-->
			<div class="clear"></div>
			
	 <div id="usesOfJava" class="toogle">
     	<h3 class="m_3">Uses of Java</h3>
     	<p class="m_text">1).Since Java has inbuilt networking features it is widely used for developing network rotocols and it's software. Socket programming is much easier and efficient do to be implemented in Java as compared to "C"</p>
		<p class="m_text">2).Java is widely used in developing Java Enterprise application. J2EE technologies are implement in java and had provide excellent support for developing J2EE Applications. We can implement web application following "MVC" patternn using J2ee frameworks like Servlet, Springs, EJB, Hibernate etc</p>
		<p class="m_text">3).Java is widely used in creating Desktop or Standalone applications because it is a fully Object Oriented Programming language and can depict the real world scenario more easily.</p>
		<p class="m_text">4).Since Java has inbuilt networking features it is widely used for developing network rotocols and it's software. Socket programming is much easier and efficient do to be implemented in Java as compared to "C"</p>
		<p class="m_text">5).Creating Graphical User Interface(GUI) in Java is very simple and efficient as compared to c and c++.So it is also used in creating GUI for applications.</p>
		<p class="m_text">6).Creating Graphical User Interface(GUI) in Java is very simple and efficient as compared to c and c++.So it is also used in creating GUI for applications.</p>
		<div class="float-left">
		<i class="fa fa-fast-backward fa-2x"></i>
		</div>
		<div class="float-right">
		<i class="fa fa-fast-forward fa-2x"></i>
		</div>
     </div>					
	 </div>
     <div class="clear"></div>
	 </div>
     </div>
	  <div class="footer">
       	 <div class="footer-top">
       		<div class="wrap">
       			   <div class="col_1_of_footer-top span_1_of_footer-top">
				  	 <ul class="f_list">
				  	 	<li>
							<div class="margin-left">
								<i class="fa fa-google-plus fa-inverse"></i>
							</div>
							<span class="delivery"><a href="https://plus.google.com/+RahulSahs/posts">Follow me</a></span></li>
				  	 </ul>
				   </div>
				   <div class="col_1_of_footer-top span_1_of_footer-top">
				  	<ul class="f_list">
				  	 	<li>
						<img src="images/f_icon1.png" alt=""/>
							<span class="delivery">Ready to Help At:
								<span class="orange"> (+91) 9035211426</span>
							</span>
						</li>
				  	 </ul>
				   </div>
				   <div class="col_1_of_footer-top span_1_of_footer-top">
				  	<ul class="f_list">
				  	 	<li><i class="fa fa-thumbs-o-up fa-inverse"></i><span class="delivery">Like Us on <i class="fa fa-facebook-square fa-inverse"></i></span></li>
				  	 </ul>
				   </div>
				  <div class="clear"></div>
			 </div>
       	    </div>
       	    
       	 
       	 
       </div>
       <script type="text/javascript">
			$(document).ready(function() {
			
				var defaults = {
		  			containerID: 'toTop', // fading element id
					containerHoverID: 'toTopHover', // fading element hover id
					scrollSpeed: 1200,
					easingType: 'linear' 
		 		};
				
				
				$().UItoTop({ easingType: 'easeOutQuart' });
				
			});
		</script>
        <a href="#" id="toTop" style="display: block;"><span id="toTopHover" style="opacity: 1;"></span></a>
</body>
</html>