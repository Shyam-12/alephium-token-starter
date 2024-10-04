# ALEPHIUM

# PROGRAMMING LANGUAGE: RALPH

-> Smart contract programming lang for Alephium
-> 3 Goals: Security, Simplicity and Efficiency

## Types in Ralph:

1. Statically typed language, with type interference: so you don't need to mention types for local variables and constants.
2. All types are value types. -> They are always copied when passed to fn args or assigned to some variable.
3. Supported types: 
-> U256: any positive integer has this as their type.
-> I256: any +ve/-ve number
-> Bool: true/false
-> ByteVec: 
   - must start with # (hash) -> followed by hex string (alphanumeric) -> #12312
   - #1223 ++ #2131 = #12232131
   - # -> empty ByteVec
-> Address:
   - Starts with @ symbol + base58 encoded alephium address
   - @1DrDyTr9RpRsQnDnXo2YRiPzPW4ooHX5LLoqXrqfMrpQH
-> String:
   - Does not have native type for string
   - but you can define string literals which are encoded in ByteVec.
   - Always starts with b`followed by the string`.

-> Tuple: 
   - Values that contains fixed number of elements, each of its own type.
   - (U256, Bool, ByteVec) = (1, true, #0) -> tuple with 3 elements
   - (a, mut b, _) -> a is immutable, b is mutable and _ is anonymous variable

-> Fixed size array:
   - Influenced by rust.
   - a0 = [1, 2, 3, 4] -> type [U256; 4]
   - a1 = [[1, 2], [3, 4]] -> type [[U256, 2]; 2]
   - a2 = [#00, #11] -> type [ByteVec; 2]

-> Struct:
   - globally defined
   - can contain mutable/immutable variable
   - to assign a value to a field all of the field value must be mutable. (x.y.z = 4) => all of them must be mutable.
   - Example: Refer struct.ral code.
   - struct Foo {
         x: U256,
         mut y: U256,
      }

      struct Bar {
         z: U256,
         mut foo: Foo
      }

      contract Baz {
         let f = Foo { x: 1, y: 2}
      }
-> Map:
-> Constants:
-> Enum

# Function Signatures

   // Public function, which can be called by anyone
   pub fn foo() -> ()

   // Private function, which can only be called inside the contract
   fn foo() -> ()

   // Function takes 1 parameter and has no return values
   fn foo(a: U256) -> ()

   // Function takes 2 parameters and returns 1 value
   fn foo(a: U256, b: Boolean) -> U256

   // Function takes 2 parameters and returns multiple values
   fn foo(a: U256, b: Boolean) -> (U256, ByteVec, Address)

# Local Variables

   In Ralph, local variables can be either immutable or mutable.

   fn foo() -> () {
   // `a` is immutable and cannot be reassigned
   let a = 10
   a = 9 // ERROR: Cannot reassign

   // `b` is mutable and can be reassigned
   let mut b = 10
   b = 9
   }

