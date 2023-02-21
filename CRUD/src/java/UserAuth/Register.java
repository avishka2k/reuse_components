/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package UserAuth;


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;
/**
 *
 * @author avishka
 */
class Register {
    Statement st;
    
    private void connectDB(){
        String url = "jdbc:mysql://localhost:3306/user_db";
        
        try {
        Class.forName("com.mysql.jdbc.Driver");
        Connection con=DriverManager.getConnection(url,"root","");
        st=con.createStatement();
        } catch (ClassNotFoundException | SQLException ex) {
             Logger.getLogger(Register.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    void addUser(String fullname, String email, String password) {
       connectDB(); 
       String query="INSERT INTO users(fullname, email, password) VALUES('"+fullname+"','"+email+"','"+password+"')";
    try {
        st.executeUpdate(query);
    } catch (SQLException ex) {
        Logger.getLogger(Register.class.getName()).log(Level.SEVERE, null, ex);
    }
    }
    
}
