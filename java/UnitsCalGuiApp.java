package gui;

import javax.swing.*;

public class Calculator extends JFrame 
{
	private final int x1 = 10;
	private final int x2 = 20;
	private final int x3 = 30;
	
	private final int y1 = 10;
	private final int y2 = 20;
	private final int y3 = 30;
	
	
	private JTextField inputField;
	private JTextField outputField;
	private JButton calculateButton;
	private JComboBox unitsCombo;
	
	public Calculator(String title) 
	{
		super(title);
		setSize(400, 300);                             
		setLocationRelativeTo(null);                   
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		
		//input-field
		inputField = new JTextField();
		inputField.setBounds(y3, x2, 50, 50);
		getContentPane().add(inputField);
		
	}
	
//run
	public static void main(String[] args) 
	{
		Calculator my_frame_obj = new Calculator("Eiheiten Rechner");
		my_frame_obj.setVisible(true);
	}

}
