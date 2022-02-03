/* create a class library and implement the following : 
constructor must take the book name as an argument
getBooklist()
issueBook(bookname,  user);
returnBook(bookName) */
// class Library{
//     constructor(userName, bookName){
//        this.book = ["Maths", "Physics", "Chemistery", "Biology", "Hindi"];
//        this.numberofbooks = this.book.length;
//        this.user = userName;
//        this.userbook = bookName;
//     }
//    getBooklist(){
//       this.book.forEach(element => {
//           console.log(element);
//       });
//    }
//    issueBook(userName1, bookName1){
//       this.user == userName1;
//       this.bookName == bookName1;
//       this.book.forEach(element => {
//          if(element === bookName1){
//             this.numberofbooks--; 
//          }
//      });
//      if(this.numberofbooks === this.book.length){
//         return "Book you are finding is not avilable in library";
//      }
//      else{
//         return "Please achieve/get your book from the counter";
//      }

//    }
//    returnBook(bookName){
//       this.userbook = bookName;
//       this.numberofbooks++;
//       this.user = "no user";
//       this.userbook = "no book allouted";
//       return "your returned Book added to the library";
//    }
// }
// books = new Library("no user", "no books allouted");
// console.log(books); 
//  console.log(books.getBooklist());
//  console.log(books.issueBook("rishav", "Maths"));
//  console.log(books);
//  console.log(books.returnBook("Maths"));
//  console.log(books);

class Library{
   constructor(bookList){
      this.bookList = bookList;
      this.issuedBooks = {};
   }

   getBookList(){
      this.bookList.forEach(element =>{
         console.log(element);
      })
   }
   issueBook(bookname, user){
   //   this.issuedBooks.push[bookname] = user;
   // console.log(this.issuedBooks[bookname]);
   if(this.issuedBooks[bookname]==undefined){
      this.issuedBooks[bookname] = user;
   }
   else{
      console.log("This book is already issued");
   }
   }

   returnBook(bookname){
     delete this.issuedBooks[bookname];
   }
}

rishavLib = new Library(['legend harry', 'legend sonu', 'legend rohan']);
rishavLib.getBookList();
rishavLib.issueBook('legend harry', 'rishav');
rishavLib.issueBook('legend harry', 'rishu');
rishavLib.issueBook('legend harry', 'raghav');
rishavLib.returnBook('legend harry');
rishavLib.issueBook('legend harry', 'rohan');
rishavLib.issueBook('legend harry', 'ronak');