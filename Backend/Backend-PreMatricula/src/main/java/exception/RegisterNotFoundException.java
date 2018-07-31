package exception;

public class RegisterNotFoundException extends NullPointerException {

	private static final long serialVersionUID = 4105086776598400738L;

	public RegisterNotFoundException(String message) {
		super(message);
	}

}