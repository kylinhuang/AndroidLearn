### android  性能优化 之序列化
Android中实现序列化的两种方式

## 1 Serializable

使用.Implements Serializable 接口

    public class Person implements Serializable{
      private static final long serialVersionUID = -7060210544600464481L;
      private String name;
      private int age;


      public String getName(){
        return name;
      }

      public void setName(String name){
        this.name = name;
      }

      public int getAge(){
        return age;
      }

      public void setAge(int age){
        this.age = age;
      }
    }


## 2 Parcelable

使用.Implements Parcelable 接口(不仅仅需要声明,还需要实现内部的相应方法)

注：写入数据的顺序和读出数据的顺序必须是相同的.

    public class Book implements Parcelable{

      private String bookName;
      private String author;
      private int publishDate;

      public Book(){ }

      public String getBookName(){
        return bookName;
      }

      public void setBookName(String bookName){
        this.bookName = bookName;
      }

      public String getAuthor(){
        return author;
      }

      public void setAuthor(String author){
        this.author = author;
      }

      public int getPublishDate(){
        return publishDate;
      }

      public void setPublishDate(int publishDate){
        this.publishDate = publishDate;
      }

      @Override
      public int describeContents(){
        return 0;
      }

      @Override
      public void writeToParcel(Parcel out, int flags){
        out.writeString(bookName);
        out.writeString(author);
        out.writeInt(publishDate);
      }

      public static final Parcelable.Creator<Book> CREATOR = new Creator<Book>(){

        @Override
        public Book[] newArray(int size){
          return new Book[size];
        }

        @Override
        public Book createFromParcel(Parcel in){
          return new Book(in);
        }
      };

      public Book(Parcel in){
        //如果元素数据是list类型的时候需要： lits = new ArrayList<?> in.readList(list); 否则会出现空指针异常.并且读出和写入的数据类型必须相同.如果不想对部分关键字进行序列化,可以使用transient关键字来修饰以及static修饰.
        bookName = in.readString();
        author = in.readString();
        publishDate = in.readInt();
      }
  }

## 3 Parcelable与Serializable的性能比较

首先Parcelable的性能要强于Serializable的原因我需要简单的阐述一下

  * 在内存的使用中,Parcelable在性能方面要强

      * Serializable使用了反射机制 ,序列化操作的时候会产生大量的临时变量,从而导致GC的频繁调用,因此在性能上会稍微逊色

      * Parcelable是以Ibinder作为信息载体的.在内存上的开销比较小,因此在内存之间进行数据传递的时候,Android推荐使用Parcelable,既然是内存方面比价有优势,那么自然就要优先选择.


  *  在读写数据的时候,Parcelable是在内存中直接进行读写,而Serializable是通过使用IO流的形式将数据读写入在硬盘上.

  但是：虽然Parcelable的性能要强于Serializable,但是仍然有特殊的情况需要使用Serializable,而不去使用Parcelable,因为Parcelable无法将数据进行持久化,因此在将数据保存在磁盘的时候,仍然需要使用后者,因为前者无法很好的将数据进行持久化.(原因是在不同的Android版本当中,Parcelable可能会不同,因此数据的持久化方面仍然是使用Serializable)



  # 总结
  Java应用程序中有Serializable来实现序列化操作

  Android中有Parcelable来实现序列化操作

  Parcelable在效率和内存上都要优秀与Serializable

  但是数据保存在磁盘的时候需要用Serializable

  因为Parcelable是在内存中直接进行读写,而Serializable是通过使用IO流的形式将数据读写入在硬盘上.
