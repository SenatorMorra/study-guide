start

? a * b
? 5 * 7
new a number
new b number

new result number

new i number
set i 0
set result 0

set a 5
set b 7

loop multiply (a > i)
  set result result + b
  set i i + 1
end multiply

log number result

delete a
delete b
delete i
delete result

finish
