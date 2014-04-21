# Test Comp
When I run grunt on this project, with the latest I get

    $ grunt
    Running "componentbuild:build" (componentbuild) task
    .
    Warning: Cannot read property '0' of undefined Use --force to continue.

    Aborted due to warnings.


##### Debugging results
Tried to debug the build and found that the error is thrown at

    setImmediate(done);
    var list = build.components; // List `undefined` here
    var partials = [];
    var componentName = list[0].name; // Error thrown here

I don't see the componentName variable being used anywhere either
