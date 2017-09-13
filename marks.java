import java.awt.*;
import javax.swing.*;
import java.awt.event.*;
import java.sql.*;
class marks implements ActionListener{
    JFrame f;
    JTextField name;
    String s;
    Connection con;
    void gui(){
        f=new JFrame("Name");
        f.setSize(500,500);
        f.setLayout(new FlowLayout());
        f.setVisible(true);
        name=new JTextField(10);
        JLabel jl=new JLabel("Enter name");
        f.add(jl);
        f.add(name);
        JButton b=new JButton("Submit");
        b.addActionListener(this);
        f.add(b);
    }
    void actionPerformed(ActionEvent ae){
        s=name.getText();
        insert();
    }
    void insert(){
        try{
            Statement stmt=con.CreateStatement();
            stmt.executeUpdate("insert into student values('"+s+"')");
        }
        catch(SQLException e){
            sopln("error");
        }
    }
    void connect(){
        try{
            Class.forName("oracle.jdbc.driver.OracleDriver");
        }
        catch(ClassNotFoundException e){
            sopln("error");
        }
        try{
            con=DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:orcl","b1","welcome")l
        }
        catch(SQLException e){
            sopln();
        }
    }
    psvm(String args[]){
        marks m=new marks();
        m.connect();
        m.gui();
    }
}
        
        