import React from 'react';

const Blog = () => {
    return (
        <div className='text-start mb-8'>

            <div className='bg-sky-300 p-8 shadow-lg hover:shadow-2xl rounded-md'>
                <h1 className='font-bold text-xl mb-5 '>1.Difference between SQL and NoSQL</h1>
                <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL. SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database. SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries. But from other side it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also all of your data must follow the same structure. This can require significant up-front preparation which means that a change in the structure would be both difficult and disruptive to your whole system.A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store. This flexibility means that documents can be created without having defined structure first. Also each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go. </p>
            </div>
            <div className='bg-sky-300 p-8 shadow-lg hover:shadow-2xl mt-7 rounded-md'>
                <h1 className=' font-bold text-xl mb-5'>2 What is JWT, and how does it work?</h1>
                <p>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.</p> <br />
                <p>
                    Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.User sign-in using username and password or google/facebook.
                    Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.
                    User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.
                    Resource server then verifies the authenticity of the token using the secret salt/ public key.</p>
            </div>

            <div className='bg-sky-300 p-8 shadow-lg hover:shadow-2xl mt-8 rounded-md'>
                <h1 className=' font-bold text-xl mb-5'>3.What is the difference between javascript and NodeJS?</h1>
                <p> JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language.  JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported. A specific non-blocking operation is required to access any operating system. There are a few essential objects in JavaScript, but they are entirely OS-specific.</p>
            </div>

            <div className='bg-sky-300 p-8 shadow-lg hover:shadow-2xl mt-8 rounded-md'>
                <h1 className=' font-bold text-xl mb-5'>4.How does NodeJS handle multiple requests at the same time?</h1>
                <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                    If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported.A specific non-blocking operation is required to access any operating system. There are a few essential objects in JavaScript, but they are entirely OS-specific.Node.js, on the other hand, can now operate non-blocking software tasks out of any JavaScript programming. It contains no OS-specific constants. Node.js establishes a strong relationship with the system files, allowing companies to read and write to the hard drive.</p>
            </div>
        </div>
    );
};

export default Blog;