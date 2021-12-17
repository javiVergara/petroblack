particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 50,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#E8E8E8"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 1,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 4,
                "size_min": 0.3,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 0.5,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 600
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 250,
                "size": 0,
                "duration": 2,
                "opacity": 0,
                "speed": 3
            },
            "repulse": {
                "distance": 400,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});




 //Declare three.js variables
 var $instance = $(this),camera, scene, renderer, stars=[];
 //assign three.js objects to each variable
 function init(){
          var $width = document.querySelector('.intergalactic').offsetWidth;
var $height = document.querySelector('.intergalactic').offsetHeight; 
     //camera
     camera = new THREE.PerspectiveCamera(80, $width / $height, 1, 4000 );
     camera.position.z = 1000;	

     //scene
     scene = new THREE.Scene();
      
     //renderer
     renderer = new THREE.WebGLRenderer();
     //set the size of the renderer
     renderer.setSize( $width, $height );
      
     //add the renderer to the html document body
     document.querySelector('.intergalactic').appendChild( renderer.domElement );
 
 }

 function addSphere(){

             // The loop will move from z position of -1000 to z position 1000, adding a random particle at each position. 
             for ( var z= -1000; z < 1000; z+=3 ) {
     
                 // Make a sphere (exactly the same as before). 
                 var geometry = new THREE.CircleGeometry( 0.4, 20 );
       console.log(geometry);
                 var material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
                 var sphere = new THREE.Mesh(geometry, material)
     
                 // This time we give the sphere random x and y positions between -500 and 500
                 sphere.position.x = Math.random() * 1000 - 500;
                 sphere.position.y = Math.random() * 1000 - 500;
     
                 // Then set the z position to where it is in the loop (distance of camera)
                 sphere.position.z = z;
     
                 // scale it up a bit
                 sphere.scale.x = sphere.scale.y = 2.5;
     
                 //add the sphere to the scene
                 scene.add( sphere );
     
                 //finally push it to the stars array 
                 stars.push(sphere); 
             }
 }

 function animateStars() { 
             
     // loop through each star
     for(var i=0; i<stars.length; i++) {
         
         star = stars[i]; 
             
         // and move it forward dependent on the mouseY position. 
         star.position.z +=  2;
             
         // if the particle is too close move it to the back
         if(star.position.z>1000) star.position.z-=2000; 
         
     }
 
 }

 function render() {
     //get the frame
     requestAnimationFrame( render );

     //render the scene
     renderer.render( scene, camera );
         animateStars();

 }
 
 init();
 addSphere();
 render();

         function updateRendererSize() {
             if (camera) {
           var $width = document.querySelector('.intergalactic').offsetWidth;
var $height = document.querySelector('.intergalactic').offsetHeight; 
                 camera.aspect = $width / $height;
                 camera.updateProjectionMatrix();
                 renderer.setSize( $width, $height );
             }
         }

window.onresize = updateRendererSize;

