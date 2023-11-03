import React, { useState, useEffect } from 'react';

export default function WebGLExample() {

    useEffect(() => {
        // Update the document title using the browser API
        const canvas = document.getElementById('my_Canvas');
        const gl = canvas.getContext('webgl');

        // https://stackoverflow.com/questions/23598471/how-do-i-clean-up-and-unload-a-webgl-canvas-context-from-gpu-after-use
        const reset = require('gl-reset')(gl)

        // Clear the canvas
        gl.clearColor(0.5, 0.5, 0.5, 0.9);

        // Enable the depth test
        gl.enable(gl.DEPTH_TEST);

        // Clear the color buffer bit
        gl.clear(gl.COLOR_BUFFER_BIT);

        /*======== Defining and storing the geometry ===========*/

        var vertices = [
        -0.5,0.5,0.0,
        -0.5,-0.5,0.0,
        0.5,-0.5,0.0, 
        ];

        const indices = [0,1,2];

        // Create an empty buffer object to store vertex buffer
        var vertex_buffer = gl.createBuffer();

        // Bind appropriate array buffer to it
        gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);

        // Pass the vertex data to the buffer
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

        // Unbind the buffer
        gl.bindBuffer(gl.ARRAY_BUFFER, null);

        // Create an empty buffer object to store Index buffer
        var Index_Buffer = gl.createBuffer();

        // Bind appropriate array buffer to it
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Index_Buffer);

        // Pass the vertex data to the buffer
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

        // Unbind the buffer
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);

        /*================ Shaders ====================*/

        // Vertex shader source code
        var vertCode =
        'attribute vec3 coordinates;' +
            
        'void main(void) {' +
            ' gl_Position = vec4(coordinates, 1.0);' +
        '}';

        // Create a vertex shader object
        var vertShader = gl.createShader(gl.VERTEX_SHADER);

        // Attach vertex shader source code
        gl.shaderSource(vertShader, vertCode);

        // Compile the vertex shader
        gl.compileShader(vertShader);

        //fragment shader source code
        var fragCode =
        'void main(void) {' +
            ' gl_FragColor = vec4(0.0, 0.0, 0.0, 0.1);' +
        '}';

        // Create fragment shader object
        var fragShader = gl.createShader(gl.FRAGMENT_SHADER);

        // Attach fragment shader source code
        gl.shaderSource(fragShader, fragCode); 

        // Compile the fragmentt shader
        gl.compileShader(fragShader);

        // Create a shader program object to store
        // the combined shader program
        var shaderProgram = gl.createProgram();

        // Attach a vertex shader
        gl.attachShader(shaderProgram, vertShader);

        // Attach a fragment shader
        gl.attachShader(shaderProgram, fragShader);

        // Link both the programs
        gl.linkProgram(shaderProgram);

        // Use the combined shader program object
        gl.useProgram(shaderProgram);

        /*======= Associating shaders to buffer objects =======*/

        // Bind vertex buffer object
        gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);

        // Bind index buffer object
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Index_Buffer);

        // Get the attribute location
        var coord = gl.getAttribLocation(shaderProgram, "coordinates");

        // Point an attribute to the currently bound VBO
        gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0); 

        // Enable the attribute
        gl.enableVertexAttribArray(coord);

        /*=========Drawing the triangle===========*/

        // Set the view port
        // gl.viewport(0,0,canvas.width,canvas.height);

        // Draw the triangled
        gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT,0);

        console.log('errors: ', gl.getError())

        return () => reset();
    }, []);

    return (
        <div>
            <canvas id="my_Canvas" width="400" height="400" />
        </div>
    );
}
