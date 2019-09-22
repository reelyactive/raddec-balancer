raddec-balancer
===============


Balance raddec traffic
----------------------

Balance raddec traffic across an arbitrary number of targets based on a given strategy.  The balancer ensures that any given transmitter is always mapped to the same target.  Currently only a modulo strategy (based on transmitterId) is available, although the design supports any number of strategies in future.  Typically used as part of a [raddec-relay](https://github.com/reelyactive/raddec-relay).


Installation
------------

    npm install raddec-balancer


Hello raddec-balancer!
----------------------

The following code will run a single raddec through the balancer to determine to which of four targets it will be mapped (possible outputs are 0, 1, 2 or 3).

```javascript
const RaddecBalancer = require('raddec-balancer');
const Raddec = require('raddec');

const NUMBER_OF_TARGETS = 4;

let balancer = new RaddecBalancer({ numberOfTargets: NUMBER_OF_TARGETS });

let raddec = new Raddec({
    transmitterId: "aa:bb:cc:dd:ee:ff",
    transmitterIdType: Raddec.identifiers.TYPE_EUI48
});

balancer.balanceRaddec(raddec, function(raddec, targetIndex) {
  console.log(targetIndex); // targetIndex = 3
});
```


License
-------

MIT License

Copyright (c) 2019 [reelyActive](https://www.reelyactive.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN 
THE SOFTWARE.
